# Security Policy

## Reporting a Vulnerability
If you find a security issue, report it to:
- Email: pascal.bouyedi@gmail.com

Please include:
- Affected URL or component
- Steps to reproduce
- Impact assessment
- Suggested remediation (if any)

## Response Targets
- Initial acknowledgment: within 72 hours
- Triage and severity assessment: within 7 days
- Remediation plan: as soon as validated by maintainers

## Security Controls in Place
- HTTPS + HSTS on deployment
- Content Security Policy (CSP)
- Clickjacking protection (`X-Frame-Options: DENY`)
- MIME sniffing protection (`X-Content-Type-Options: nosniff`)
- Restricted browser permissions policy
- `robots.txt`, `sitemap.xml`, and security disclosure at `/.well-known/security.txt`

## Maintenance Practices
- Automated dependency update checks via Dependabot
- Regular `npm audit` review before production deployments
- Production build verification before release
