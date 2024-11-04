const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com/in",
        target: "_Blank"
    },
    children: "Click me to visit Google"
}
const mainContainer = document.getElementById("root")

function customRender (reactElement,mainContainer){
    const DOMelement = document.createElement(reactElement.type)
    DOMelement.innerHTML = reactElement.children
    /*DOMelement.setAttribute('href',reactElement.props.href)
    DOMelement.setAttribute('target',reactElement.props.target)  Here for every attribute we are writing multiple /times and if 3rd attribute cannot work */
    for (const prop in reactElement.props) {
        DOMelement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(DOMelement)
}

customRender (reactElement,mainContainer)