const BASE_URL = 'https://springboot-12.onrender.com'; // backend URL na Renderu

const form = document.getElementById('personForm');
const responseParagraph = document.getElementById('response');
const loadBtn = document.getElementById('loadPersons');
const personList = document.getElementById('personList');

// POST - dodavanje osobe
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    const data = { name, age };

    try {
        const res = await fetch(`${BASE_URL}/persons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const result = await res.json();
            responseParagraph.textContent = `Osoba dodata: ${result.name}, ${result.age} godina`;
            form.reset();
        } else {
            responseParagraph.textContent = `Greška: ${res.status}`;
        }
    } catch (err) {
        responseParagraph.textContent = `Greška: ${err.message}`;
    }
});

// GET - učitavanje osoba
loadBtn.addEventListener('click', async () => {
    try {
        const res = await fetch(`${BASE_URL}/persons`);
        if (!res.ok) throw new Error(`Greška: ${res.status}`);
        const persons = await res.json();

        personList.innerHTML = '';
        persons.forEach(p => {
            const li = document.createElement('li');
            li.textContent = `${p.name} (${p.age} godina) `;

            // DELETE - brisanje osobe
            const delBtn = document.createElement('button');
            delBtn.textContent = "Obriši";
            delBtn.addEventListener('click', async () => {
                try {
                    const delRes = await fetch(`${BASE_URL}/persons/${p.id}`, { method: 'DELETE' });
                    if (delRes.ok) {
                        li.remove();
                    } else {
                        alert(`Greška kod brisanja: ${delRes.status}`);
                    }
                } catch (err) {
                    alert(`Greška: ${err.message}`);
                }
            });

            li.appendChild(delBtn);
            personList.appendChild(li);
        });
    } catch (err) {
        personList.innerHTML = `<li>Greška: ${err.message}</li>`;
    }
});
