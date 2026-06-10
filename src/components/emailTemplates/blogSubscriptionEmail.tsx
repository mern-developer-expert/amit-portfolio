import * as React from "react";

interface BlogSubscriptionEmailProps {
    subscriberEmail: string;
    siteUrl?: string;
}

//  React.FC<Readonly<ContactEmailProps>>

export const BlogSubscriptionEmail: React.FC<BlogSubscriptionEmailProps> = ({
    subscriberEmail,
    siteUrl = "https://www.amitdevjourney.com",
}) => {
    return (
        <div
            style={{
                fontFamily: "'Sora', sans-serif",
                backgroundColor: "#0a0a0a",
                color: "#f1f5f9",
                padding: "40px",
                maxWidth: "600px",
                margin: "0 auto",
                borderRadius: "12px",
                boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
            }}
        >
            {/* Header */}
            <div
                style={{
                    textAlign: "center" as const,
                    marginBottom: "30px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid #1e293b",
                }}
            >
                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        background:
                            "linear-gradient(135deg, #8ef3c1 0%, #3ed6ac 50%, #06b6d4 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        margin: "0 0 10px 0",
                        letterSpacing: "-0.025em",
                        borderRadius: "8px",
                    }}
                >
                    New Blog Subscriber!
                </h1>
                <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
                    Someone just joined your Tech Blog community 🚀
                </p>
            </div>

            {/* Subscription Details */}
            <div
                style={{
                    backgroundColor: "#1e293b",
                    padding: "24px",
                    borderRadius: "8px",
                    marginBottom: "24px",
                    border: "1px solid #334155",
                }}
            >
                <h2
                    style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#f1f5f9",
                        margin: "0 0 12px 0",
                    }}
                >
                    Subscriber Details
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "8px" }}>
                        <strong style={{ color: "#cbd5e1" }}>Email:</strong>{" "}
                        <span style={{ color: "#06b6d4", fontFamily: "monospace" }}>
                            {subscriberEmail}
                        </span>
                    </li>
                    <li style={{ marginBottom: "8px" }}>
                        <strong style={{ color: "#cbd5e1" }}>Subscription Date:</strong>{" "}
                        <span style={{ color: "#94a3b8" }}>
                            {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                    </li>
                    <li style={{ marginBottom: 0 }}>
                        <strong style={{ color: "#cbd5e1" }}>Source:</strong>{" "}
                        <span style={{ color: "#10b981" }}>Tech Blog Newsletter</span>
                    </li>
                </ul>
            </div>

            {/* Welcome Message */}
            <div style={{ marginBottom: "30px" }}>
                <p style={{ lineHeight: "1.6", color: "#e2e8f0", fontSize: "16px" }}>
                    Hi Amit,
                </p>
                <p
                    style={{
                        lineHeight: "1.6",
                        color: "#e2e8f0",
                        fontSize: "16px",
                        marginBottom: "16px",
                    }}
                >
                    Exciting news! <strong style={{ color: "#06b6d4" }}>{subscriberEmail}</strong> has subscribed to
                    your Tech Blog. They're eager for your insights on MERN stack
                    development, performance optimization, and real-world project stories.
                </p>
                <p style={{ lineHeight: "1.6", color: "#e2e8f0", fontSize: "16px" }}>
                    This brings your community one step closer to sharing knowledge and
                    building together. Keep crafting those premium tutorials—your readers
                    (and now this new one) are waiting!
                </p>
            </div>

            {/* CTA */}
            <div
                style={{
                    textAlign: "center" as const,
                    marginBottom: "30px",
                }}
            >
                <a
                    href={`${siteUrl}/blog`}
                    style={{
                        display: "inline-block",
                        background:
                            "linear-gradient(135deg, #8ef3c1 0%, #3ed6ac 50%, #06b6d4 100%)",
                        color: "#0a0a0a",
                        padding: "12px 24px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "16px",
                        boxShadow: "0 4px 14px 0 rgba(14, 165, 233, 0.4)",
                        transition: "transform 0.2s ease",
                    }}
                    onMouseOver={(e: any) => (e.target.style.transform = "scale(1.05)")}
                    onMouseOut={(e: any) => (e.target.style.transform = "scale(1)")}
                >
                    View Blog Dashboard
                </a>
            </div>

            {/* Footer */}
            <div
                style={{
                    textAlign: "center" as const,
                    paddingTop: "20px",
                    borderTop: "1px solid #1e293b",
                    color: "#64748b",
                    fontSize: "14px",
                }}
            >
                <p style={{ margin: "0 0 8px 0" }}>
                    Sent from{" "}
                    <a
                        href={siteUrl}
                        style={{ color: "#06b6d4", textDecoration: "none" }}
                    >
                        Amit's Tech Blog
                    </a>
                </p>
                <p style={{ margin: 0 }}>
                    If you no longer wish to receive these,{" "}
                    <a href="#" style={{ color: "#06b6d4", textDecoration: "none" }}>
                        unsubscribe here
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default BlogSubscriptionEmail;
