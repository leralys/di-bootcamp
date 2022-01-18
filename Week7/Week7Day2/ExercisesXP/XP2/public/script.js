const fetchUser = async () => {
    const res = await fetch('http://localhost:3000/user');
    const data = await res.json();
    let json = JSON.stringify(data);
    document.body.append(json);
}
fetchUser();