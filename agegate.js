(function () {
    // Check if user already verified
    if (localStorage.getItem("av19_verified") === "yes") return;

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "av19-overlay";
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999",
        backdropFilter: "blur(6px)",
    });

    // Create popup container
    const popup = document.createElement("div");
    Object.assign(popup.style, {
        background: "#fff",
        padding: "30px 40px",
        borderRadius: "16px",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
        fontFamily: "Arial, sans-serif",
    });

    // Logo (optional)
    const logoURL = document.currentScript.getAttribute("data-logo");
    if (logoURL) {
        const logo = document.createElement("img");
        logo.src = logoURL;
        logo.alt = "Logo";
        Object.assign(logo.style, {
            width: "100px",
            height: "auto",
            marginBottom: "15px",
        });
        popup.appendChild(logo);
    }

    // Title text
    const title = document.createElement("h2");
    title.textContent = "Are you over 19?";
    Object.assign(title.style, {
        margin: "10px 0",
        fontSize: "22px",
        fontWeight: "bold",
    });
    popup.appendChild(title);

    // Description text
    const desc = document.createElement("p");
    desc.textContent = "You must be 19 years of age or older to access this site.";
    Object.assign(desc.style, {
        fontSize: "14px",
        color: "#444",
        marginBottom: "20px",
    });
    popup.appendChild(desc);

    // Button container
    const btnContainer = document.createElement("div");
    Object.assign(btnContainer.style, {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
    });

    // YES button
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes";
    Object.assign(yesBtn.style, {
        flex: "1",
        background: "#4CAF50",
        color: "#fff",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    });
    yesBtn.addEventListener("click", () => {
        localStorage.setItem("av19_verified", "yes");
        overlay.remove();
    });

    // NO button
    const noBtn = document.createElement("button");
    noBtn.textContent = "No";
    Object.assign(noBtn.style, {
        flex: "1",
        background: "#E53935",
        color: "#fff",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    });
    noBtn.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });

    // Append buttons
    btnContainer.appendChild(yesBtn);
    btnContainer.appendChild(noBtn);
    popup.appendChild(btnContainer);

    // Add everything to overlay
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
})();
