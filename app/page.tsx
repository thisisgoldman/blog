import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Eric Goldman
      </h1>
      <p className="mb-4">
        {`I'm a builder and entrepreneur based in San Francisco. I currently work at Notion, where I'm helping build the developer platform — enabling developers and coding agents alike to extend and tailor Notion to their exact needs.`}
      </p>
      <p className="mb-4">
        {`Before Notion, I co-founded Sequin, a change data capture (CDC) platform for streaming database changes. Sequin was acquired by Notion in August 2025. Previously, I've built developer tools and infrastructure across roles in San Francisco, Venice, CA, and Tel Aviv.`}
      </p>
      <p className="mb-4">
        {`I studied at the London School of Economics and Political Science.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
