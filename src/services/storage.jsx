//Buscar os links salvos
export async function getLinks(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//Salvar os links no localStorage
export async function saveLink(key, value) {
    let linksStored = await getLinks(key);

    //Existe um link com os mesmo id? Se sim, não salva de novo
    const hasLink = linksStored.some(item => item.id === value.id);

    if(hasLink) {
        console.log("Link já existe.");
        return;
    }
    
    //Adiciona no storage;
    linksStored.push(value)
    await localStorage.setItem(key, JSON.stringify(linksStored));
}

//Deletar um item do localStorage
export function deleteLink(item, id) {
    let myLinks = item.filter(item => {
        return (item.id !== id);
    });

    localStorage.setItem('@linkData', JSON.stringify(myLinks));
    console.log('Deletado com sucesso');

    return myLinks;
}
