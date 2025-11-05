document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employee-form");
  const tableBody = document.getElementById("employee-table-body");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const name = inputs[0].value.trim();
    const position = inputs[1].value.trim();
    const email = inputs[2].value.trim();

    if (name && position && email) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td class="p-3">${name}</td>
        <td class="p-3">${position}</td>
        <td class="p-3">${email}</td>
        <td class="p-3 text-green-400 font-semibold">Active</td>
      `;

      tableBody.appendChild(row);

      // Clear form
      inputs.forEach(input => input.value = "");
    }
  });
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const rows = tableBody.querySelectorAll("tr");

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    const match = Array.from(cells).some(cell =>
      cell.textContent.toLowerCase().includes(query)
    );
    row.style.display = match ? "" : "none";
  });
});

// This is a test commit for practicing git revert