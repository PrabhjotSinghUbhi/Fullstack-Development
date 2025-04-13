const container = document.querySelector("#root")

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

function renderElement(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const key in reactElement.props) {
        if (key === "children") continue

        domElement.setAttribute(key,reactElement.props[key]);
    }

    container.append(domElement)
}

renderElement(reactElement, container)