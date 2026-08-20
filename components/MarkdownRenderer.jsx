export default function MarkdownRenderer({ contentHtml }) {
  return (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
