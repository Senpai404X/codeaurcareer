export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for CodeAurCareer — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Privacy <span className="gradient-text">Policy</span>
      </h1>

      <div className="article-content space-y-6 text-slate-600 dark:text-slate-300">
        <p>
          <strong>Last updated:</strong> August 19, 2026
        </p>

        <h2>Introduction</h2>
        <p>
          CodeAurCareer (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website
          codeaurcareer.com. This Privacy Policy explains how we collect, use,
          and safeguard information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect non-personal information such as browser type, device
          information, pages visited, and time spent on the site through
          analytics tools like Google Analytics. If you contact us via email or
          a contact form, we may collect your name and email address.
        </p>

        <h2>Cookies and Advertising</h2>
        <p>
          We use cookies to improve your browsing experience and may display
          advertisements through Google AdSense. Third-party vendors, including
          Google, use cookies to serve ads based on your prior visits to this
          website or other websites. You can opt out of personalized advertising
          by visiting Google&apos;s Ads Settings.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To improve website content and user experience</li>
          <li>To respond to your inquiries</li>
          <li>To analyze site traffic and usage patterns</li>
          <li>To display relevant advertisements</li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible
          for the privacy practices of those websites. We encourage you to read
          their privacy policies.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:hello@codeaurcareer.com">hello@codeaurcareer.com</a>.
        </p>
      </div>
    </section>
  );
}
