export default function TermsOfServicePage() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner container">
          <a href="/" className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-name">Auxerta</span>
              <span className="brand-tagline">Enterprise data annotation</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#research">Research</a>
            <a href="/#contact" className="nav-cta">
              Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section section-alt">
          <div className="container is-visible">
            <header className="section-header">
              <div>
                <p className="eyebrow">Legal</p>
                <h2>Terms of Service</h2>
              </div>
              <p className="section-copy">
                The rules for using Auxerta&apos;s annotation services.
              </p>
            </header>

            <article className="card legal-article">
              <h2>1. Agreement</h2>
              <p>
                By using Auxerta&apos;s services, you agree to these Terms of Service. If you
                do not agree with these terms, please do not use our services.
              </p>
              <p>
                We may update these terms from time to time. If we make material changes,
                we will update this page. Continued use after changes means you accept the
                updated terms.
              </p>

              <h2>2. Eligibility</h2>
              <p>You may use our services only if you:</p>
              <ul>
                <li>Are at least 18 years old</li>
                <li>Can legally enter into a binding contract</li>
                <li>
                  Are using the services on your own behalf or for an organization you are
                  authorized to represent
                </li>
              </ul>

              <h2>3. Accounts and security</h2>
              <p>You are responsible for:</p>
              <ul>
                <li>Keeping your account credentials confidential</li>
                <li>Ensuring information provided to Auxerta is accurate</li>
                <li>All activity that occurs under your accounts</li>
              </ul>

              <h2>4. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the services for illegal activities or in violation of any law</li>
                <li>Upload content that infringes on intellectual property or privacy rights</li>
                <li>Introduce malware or attempt to disrupt or overload our systems</li>
                <li>Reverse engineer, scrape, or misuse our infrastructure</li>
                <li>Resell, sublicense, or provide access to the services without permission</li>
              </ul>

              <h2>5. Project data and ownership</h2>
              <p>
                You or your organization retain ownership of project data you provide and the
                resulting annotations, unless otherwise agreed in a separate written contract.
              </p>
              <p>
                By providing data, you grant Auxerta a limited license to process, annotate,
                and store that data to deliver the services and maintain quality controls.
              </p>

              <h2>6. Payment and pricing</h2>
              <p>
                Pricing, payment terms, and specific deliverables are defined in proposals,
                order forms, or other written agreements between you and Auxerta.
              </p>
              <p>
                You agree to pay all fees when due. Auxerta may suspend or limit services for
                unpaid or overdue invoices.
              </p>

              <h2>7. Service changes and availability</h2>
              <p>
                We may change or improve features over time. While we aim to provide stable
                service, we do not guarantee uninterrupted or error-free operation.
              </p>

              <h2>8. Confidentiality</h2>
              <p>
                Both you and Auxerta may share confidential information with each other.
                Each party agrees to use such information only for the purpose of the
                relationship and to protect it with reasonable safeguards.
              </p>

              <h2>9. Disclaimer of warranties</h2>
              <p>
                Auxerta provides the services "as is" and "as available". To the extent
                permitted by law, we disclaim all warranties, express or implied, including
                implied warranties of merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>

              <h2>10. Limitation of liability</h2>
              <p>
                To the extent permitted by law, Auxerta will not be liable for indirect,
                incidental, consequential, special, or punitive damages, or for loss of
                profits or revenue.
              </p>
              <p>
                Our total liability for any claim related to the services is limited to the
                amount you paid Auxerta for those services in the 12 months before the event
                giving rise to the claim.
              </p>

              <h2>11. Termination</h2>
              <p>
                You may stop using the services at any time. We may suspend or terminate
                access if you materially breach these terms, do not pay fees when due, or
                misuse the services.
              </p>
              <p>
                Certain sections of these terms, such as those on confidentiality, payment,
                and limitations of liability, will survive termination.
              </p>

              <h2>12. Governing law</h2>
              <p>
                Unless otherwise agreed in writing, these terms are governed by the laws of
                the jurisdiction where Auxerta is incorporated, without regard to conflict
                of law principles.
              </p>

              <h2>13. Entire agreement</h2>
              <p>
                These Terms of Service, along with any signed agreement or order form, make
                up the entire agreement between you and Auxerta regarding the services.
              </p>

              <h2>14. Contact</h2>
              <p>
                If you have questions about these terms, contact us at{" "}
                <a href="mailto:legal@auxerta.com">legal@auxerta.com</a> or{" "}
                <a href="mailto:partner@auxerta.com">partner@auxerta.com</a>.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand-block">
            <span className="footer-brand">Auxerta</span>
            <span className="footer-tagline">Enterprise data annotation.</span>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/#services">Computer vision</a>
              <a href="/#services">Natural language</a>
              <a href="/#services">Custom workflows</a>
              <a href="/#pricing">Pricing</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="/#research">Research</a>
              <a href="/#contact">Contact</a>
              <span>Careers</span>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <span>Documentation</span>
              <span>API reference</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} Auxerta Inc. All rights reserved.</span>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms-of-service">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
