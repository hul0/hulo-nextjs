"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "exploiting-buffer-overflows-2024": {
      title: "Modern Buffer Overflow Exploitation Techniques",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["Exploitation", "Binary Security", "Research"],
      content: `
# Modern Buffer Overflow Exploitation Techniques

Buffer overflow vulnerabilities remain one of the most critical security issues in modern software. Despite decades of mitigation techniques, skilled attackers continue to find ways to exploit these vulnerabilities.

## Understanding the Fundamentals

Buffer overflows occur when a program writes more data to a buffer than it can hold. This excess data overwrites adjacent memory locations, potentially allowing an attacker to control program execution.

\`\`\`c
#include <stdio.h>
#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input); // Dangerous! No bounds checking
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    }
    return 0;
}
\`\`\`

## Modern Mitigation Bypasses

### ASLR Bypass Techniques

Address Space Layout Randomization (ASLR) randomizes memory addresses, but several techniques can bypass it:

1. **Information Leaks**: Exploiting format string vulnerabilities to leak addresses
2. **Partial Overwrites**: Overwriting only the least significant bytes
3. **Heap Spraying**: Filling memory with predictable patterns

\`\`\`python
# Example ASLR bypass using information leak
def leak_stack_address(target):
    payload = b"AAAA%p%p%p%p"
    response = send_payload(target, payload)
    leaked_addr = extract_address(response)
    return calculate_base_address(leaked_addr)
\`\`\`

### Stack Canary Bypasses

Stack canaries detect buffer overflows, but they can be bypassed:

\`\`\`assembly
; Overwrite canary with correct value
mov rax, gs:0x28    ; Load canary value
mov [rbp-0x8], rax  ; Restore canary before return
\`\`\`

## Advanced Exploitation Techniques

### ROP Chain Construction

Return-Oriented Programming (ROP) allows code execution without injecting shellcode:

\`\`\`python
# Building a ROP chain
rop_chain = [
    pop_rdi_gadget,     # pop rdi; ret
    bin_sh_string,      # "/bin/sh" string address
    system_address,     # system() function address
]
\`\`\`

### Heap Exploitation

Modern heap exploitation techniques target metadata corruption:

\`\`\`c
// Use-after-free vulnerability
free(ptr);
// ... ptr is used again without reallocation
strcpy(ptr, malicious_data); // Heap corruption
\`\`\`

## Defensive Strategies

1. **Use safe functions**: Replace strcpy() with strncpy()
2. **Enable compiler protections**: -fstack-protector-strong
3. **Implement CFI**: Control Flow Integrity
4. **Use memory-safe languages**: Rust, Go for new projects

## Conclusion

While modern systems have multiple layers of protection, determined attackers continue to find creative ways to bypass them. The key to defense is understanding these techniques and implementing comprehensive security measures.

Remember: **Security is not a destination, it's a journey.**
      `,
    },
    "api-security-checklist": {
      title: "The Ultimate API Security Checklist",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["API Security", "Web Security", "Best Practices"],
      content: `
# The Ultimate API Security Checklist

APIs are the backbone of modern applications, but they're also prime targets for attackers. This comprehensive checklist will help you secure your APIs against common vulnerabilities.

## Authentication & Authorization

### ✅ Implement Strong Authentication
- Use OAuth 2.0 or JWT tokens
- Implement multi-factor authentication for sensitive operations
- Never use basic authentication over HTTP

\`\`\`javascript
// Secure JWT implementation
const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h', algorithm: 'HS256' }
    );
}
\`\`\`

### ✅ Implement Proper Authorization
- Use role-based access control (RBAC)
- Implement resource-level permissions
- Validate permissions on every request

## Input Validation & Sanitization

### ✅ Validate All Inputs
\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).required(),
    age: Joi.number().integer().min(13).max(120)
});

app.post('/users', (req, res) => {
    const { error, value } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    // Process validated data
});
\`\`\`

## Rate Limiting & DDoS Protection

### ✅ Implement Rate Limiting
\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

## Data Protection

### ✅ Encrypt Sensitive Data
- Use HTTPS everywhere
- Encrypt data at rest
- Implement proper key management

\`\`\`javascript
const crypto = require('crypto');

function encryptSensitiveData(data, key) {
    const cipher = crypto.createCipher('aes-256-gcm', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
\`\`\`

## Error Handling

### ✅ Implement Secure Error Handling
\`\`\`javascript
app.use((err, req, res, next) => {
    // Log detailed error for debugging
    console.error(err.stack);
    
    // Return generic error to client
    res.status(500).json({
        error: 'Internal server error',
        requestId: req.id
    });
});
\`\`\`

## Security Headers

### ✅ Set Security Headers
\`\`\`javascript
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});
\`\`\`

## Monitoring & Logging

### ✅ Implement Comprehensive Logging
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'security.log' })
    ]
});

// Log security events
function logSecurityEvent(event, details) {
    logger.warn('Security Event', {
        event,
        details,
        timestamp: new Date().toISOString(),
        ip: req.ip
    });
}
\`\`\`

## Testing & Validation

### ✅ Regular Security Testing
- Implement automated security testing
- Conduct regular penetration testing
- Use SAST/DAST tools in CI/CD pipeline

## Conclusion

API security is not a one-time implementation but an ongoing process. Regular audits, updates, and monitoring are essential to maintain a strong security posture.

**Remember: The weakest link determines your overall security.**
      `,
    },
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold font-mono mb-6">
              <GlitchText text={post.title} className="text-primary" />
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded font-mono border border-primary/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-card border border-primary/30 rounded-lg p-4 overflow-x-auto"><code class="text-primary font-mono text-sm">$2</code></pre>',
                  )
                  .replace(
                    /`([^`]+)`/g,
                    '<code class="bg-primary/10 text-primary px-1 py-0.5 rounded font-mono text-sm">$1</code>',
                  )
                  .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold font-mono text-primary mb-6 mt-8">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold font-mono text-secondary mb-4 mt-6">$2</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold font-mono text-accent mb-3 mt-4">$3</h3>')
                  .replace(/^\*\*(.+)\*\*$/gm, '<p class="text-lg font-bold text-foreground mb-4">$1</p>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
                  .replace(/^- (.+)$/gm, '<li class="text-muted-foreground mb-2">$1</li>')
                  .replace(/^(\d+)\. (.+)$/gm, '<li class="text-muted-foreground mb-2">$2</li>')
                  .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4 leading-relaxed">')
                  .replace(/^(?!<[h|l|p|d])/gm, '<p class="text-muted-foreground mb-4 leading-relaxed">')
                  .replace(/$(?!<\/[h|l|p|d])/gm, "</p>"),
              }}
            />
          </motion.article>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-primary/20"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground font-mono">
                Found this helpful? Share it with your network.
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
              >
                More Posts
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.footer>
        </div>
      </main>

      <Footer />
    </div>
  )
}
