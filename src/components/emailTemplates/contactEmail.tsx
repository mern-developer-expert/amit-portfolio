import React from "react";

interface ContactEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
    name,
    email,
    subject,
    message,
}) => {
    return (
        <div
            style={{
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                backgroundColor: "#f4f7fa",
                margin: 0,
                padding: 0,
                color: "#333",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    margin: "40px auto",
                    background: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #06b6d4, #3ed6ac, #8ef3c1)",
                        padding: "40px 30px",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "28px",
                            fontWeight: 600,
                        }}
                    >
                        New Message from Your Portfolio
                    </h1>
                </div>

                {/* Content */}
                <div style={{ padding: "35px 30px" }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            placeItems: "center",
                            marginRight: "20px",
                        }}
                    >
                        <div>
                            <strong
                                style={{
                                    fontWeight: 600,
                                    color: "#555",
                                    marginBottom: "6px",
                                    display: "block",
                                    marginRight: "10px",
                                    marginTop: "7px",
                                }}
                            >
                                From :
                            </strong>
                        </div>
                        <div
                            style={{
                                background: "#f8fafc",
                                padding: "6px 6px",
                                borderRadius: "8px",
                            }}
                        >
                            {name} &lt;{email}&gt;
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            placeItems: "center",
                            marginRight: "20px",
                        }}
                    >
                        <div>
                            <strong
                                style={{
                                    fontWeight: 600,
                                    color: "#555",
                                    marginBottom: "6px",
                                    display: "block",
                                    marginRight: "10px",
                                    marginTop: "20px",
                                }}
                            >
                                Subject :
                            </strong>
                        </div>
                        <div
                            style={{
                                background: "#f8fafc",
                                padding: "6px 6px",
                                borderRadius: "8px",
                                marginBottom: "20px",
                                marginTop: "14px",
                            }}
                        >
                            {subject}
                        </div>
                    </div>

                    <strong
                        style={{
                            fontWeight: 600,
                            color: "#555",
                            marginBottom: "10px",
                            display: "block",
                            marginTop: "20px",
                        }}
                    >
                        Message
                    </strong>
                    <div
                        style={{
                            background: "#f8fafc",
                            padding: "12px 16px",
                            borderRadius: "8px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                        }}
                    >
                        {message.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #06b6d4, #3ed6ac, #8ef3c1)",
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#FFF",
                    }}
                >
                    Sent via your portfolio —{" "}
                    <a
                        href="https://www.amitdevjourney.com"
                        style={{
                            color: "#28282B",
                            fontSize: "16px",
                            textDecoration: "none",
                        }}
                    >
                        amitdevjourney.com
                    </a>
                    <br />
                    <small>© {new Date().getFullYear()} Amit Kumar</small>
                </div>
            </div>
        </div>
    );
}
