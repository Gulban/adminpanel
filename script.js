async function getAll() {
    try {
        const res = await fetch("https://6724af8bc39fedae05b25a17.mockapi.io/products")
        const data = await res.json()
        return data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function getById(id) {
    try {
        const res = await fetch("https://6724af8bc39fedae05b25a17.mockapi.io/products/")
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

async function deleteById(id) {
    try {
        const res = await fetch("https://6724af8bc39fedae05b25a17.mockapi.io/products")
        const data = await res.json()
        const all = await getAll()
        console.log(all);

    }     
          catch (error) {
        console.log(error);
    }
}

async function createOne(obj) {
    const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    };
    try {
        const res = await fetch('https://6724af8bc39fedae05b25a17.mockapi.io/products', requestOptions)
        const data = await res.json()


        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

async function update(id, obj) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(obj),
    };
    try {
        const res = await fetch('https://6724af8bc39fedae05b25a17.mockapi.io/products/', +id,requestOptions)
        const data = await res.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}