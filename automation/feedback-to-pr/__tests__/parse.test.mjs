// Sanity test for the structured-field extractor. Run with `node parse.test.mjs`.
// This duplicates the regex from poll.ts so the parser can be smoke-tested
// without the runtime/Slack/GitHub deps. Update both if you change the parser.

import { strict as assert } from 'node:assert';

function extractField(text, label) {
  const re = new RegExp(
    `\\*${label}:\\*\\s*([\\s\\S]*?)(?=\\n\\*[A-Z][^*]*:\\*|$)`,
  );
  const m = text.match(re);
  const captured = m?.[1];
  return captured ? captured.trim().replace(/^`|`$/g, '') : '';
}

const FEEDBACK_HEADER_RE = /^(?::\w+:\s*)?\*MCP Feedback\*/m;

const sample = `:bug: *MCP Feedback* — \`bug\`
*Intent:* Single-line intent.
*Tool:* \`get_creative_insights\`
*User Query:* Multi
line query.
*Comment:* Paragraph 1.

Paragraph 2 with details.

Paragraph 3 closing.
*User:* \`abc123\`
*Orgs:* \`def456\`
*Tags:* bug, taxonomy`;

assert.equal(FEEDBACK_HEADER_RE.test(sample), true, 'header detection');
assert.equal(extractField(sample, 'Tool'), 'get_creative_insights', 'tool single-token');
assert.equal(extractField(sample, 'Intent'), 'Single-line intent.', 'intent single-line');
assert.equal(extractField(sample, 'User Query'), 'Multi\nline query.', 'multi-line user query');

const comment = extractField(sample, 'Comment');
assert.ok(comment.includes('Paragraph 1.'), 'comment contains p1');
assert.ok(comment.includes('Paragraph 2'), 'comment contains p2');
assert.ok(comment.includes('Paragraph 3 closing.'), 'comment contains p3');
assert.ok(!comment.includes('*User:*'), 'comment does not bleed into User field');

assert.equal(extractField(sample, 'User'), 'abc123', 'user value (backticks stripped)');
assert.equal(extractField(sample, 'Orgs'), 'def456', 'orgs value (backticks stripped)');
assert.equal(extractField(sample, 'Tags'), 'bug, taxonomy', 'tags raw');

// Edge case: header without emoji prefix
const noEmoji = `*MCP Feedback* — \`feature-request\`
*Tool:* \`get_demographic_breakdown\`
*Comment:* x`;
assert.equal(FEEDBACK_HEADER_RE.test(noEmoji), true, 'header without emoji prefix');

// Edge case: missing field returns empty string, not error
assert.equal(extractField(sample, 'NonExistent'), '', 'missing field is empty string');

// Edge case: severity extraction
const sevMatch = sample.match(/\*MCP Feedback\*\s*[—–-]\s*`?([\w-]+)`?/);
assert.equal(sevMatch?.[1], 'bug', 'severity extraction');

console.log('OK — all parse assertions passed');
