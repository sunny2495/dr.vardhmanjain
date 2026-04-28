const contact = {
    firstName: "Vardhman",
    lastName: "Jain",
    fullName: "Dr. Vardhman Jain",
    title: "Orthopedic and Arthroscopic Surgeon",
    clinic: "Delhi Temple Nursing Home",
    phone: "+919810103230",
    landline: "01141502511",
    email: "dr.vardhmanjain02@gmail.com",
    website: "https://drvardhmanjain.in",
    address: "1, Ansari Road, Daryaganj, New Delhi - 110002",
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".action").forEach((button, index) => {
        window.setTimeout(() => {
            button.classList.add("show");
        }, 220 + index * 120);
    });

    document.getElementById("saveContact").addEventListener("click", saveContact);
});

function saveContact() {
    const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${contact.lastName};${contact.firstName};;;Dr.`,
        `FN:${contact.fullName}`,
        `ORG:${contact.clinic}`,
        `TITLE:${contact.title}`,
        `TEL;TYPE=CELL:${contact.phone}`,
        `TEL;TYPE=WORK,VOICE:${contact.landline}`,
        `EMAIL;TYPE=INTERNET:${contact.email}`,
        `URL:${contact.website}`,
        `ADR;TYPE=WORK:;;${contact.address};New Delhi;Delhi;110002;India`,
        "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Dr-Vardhman-Jain.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 400);
}
