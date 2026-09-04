const form = document.getElementById("delete-form");
const status = document.getElementById("status");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector("button");
  button.disabled = true;
  status.textContent = "Deleting your account…";
  try {
    const response = await fetch("/api/auth/delete-account", {
      method: "POST", headers: { "Content-Type": "application/json" },
      credentials: "omit", cache: "no-store",
      body: JSON.stringify({email: form.email.value, password: form.password.value, confirmation: form.confirmation.value})
    });
    const result = await response.json();
    if (!response.ok || result.deleted !== true) throw new Error(result.error || "Deletion failed. Please try again.");
    form.reset();
    for (const input of form.querySelectorAll("input")) input.disabled = true;
    button.textContent = "Account deleted";
    status.textContent = "Your account and cloud exam progress have been deleted. You can continue studying offline. Clear local progress on each device in Settings if you also want to remove those copies.";
  } catch (error) {
    status.textContent = error instanceof Error ? error.message : "Couldn't connect. Please try again.";
    button.disabled = false;
  } finally { form.password.value = ""; }
});
