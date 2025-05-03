function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // console.log(reactElement.children);

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])

        // console.log(prop);
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)