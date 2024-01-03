import { Template } from '@svgr/babel-plugin-transform-svg-component'
export const defaultTemplate: Template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};
function findPathParent(obj, arr) {
  if(!obj) return;
  arr.push(obj.type);
  const children = obj.props?.children;
  if (obj.type === 'path' && !children) {
      return arr.pop();
  } else if (typeof children === 'object') {
    if(Array.isArray(children)) {
        for(let i = 0; i < children.length; i++) {
            const result = findPathParent(children[i], arr);
            if(result) {
                // find first path then jump
                break;
            }
        }
    } else {
        findPathParent(children, arr)
    }
  } else {
    arr.pop();
  }
}
function addNewStyle(newStyle) {
    let styleElement = document.getElementById('styles_js');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = 'styles_js';
      document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

function changePathStyle(props, arr, id) {
    if(!props) return;
    const str = arr.join(' ');
    const root = arr[0];
    const others = arr.slice(1);

    if(props.color) {
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props.color + '}');
    }
    if(props['data-hoverColor']) {
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props['data-hoverColor'] + '}');
    }
    if(props['data-activeColor']) {
        addNewStyle(root + '#'+ id + ':active ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props['data-activeColor'] + '}');
    }
    if (Array.isArray(props['data-twoToneColor'])) {
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props['data-twoToneColor'][0] + '}');
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(2) {fill: ' + props['data-twoToneColor'][1] + '}');
    }
    if (Array.isArray(props['data-hoverTwoToneColor'])) {
        addNewStyle(root + '#'+ id + ':hover ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props['data-hoverTwoToneColor'][0] + '}');
        addNewStyle(root + '#'+ id + ':hover ' + others.join(' ') + ' path:nth-of-type(2) {fill: ' + props['data-hoverTwoToneColor'][1] + '}');
    }
    if (Array.isArray(props['data-activeTwoToneColor'])) {
      addNewStyle(root + '#'+ id + ':active ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props['data-activeTwoToneColor'][0] + '}');
      addNewStyle(root + '#'+ id + ':active ' + others.join(' ') + ' path:nth-of-type(2) {fill: ' + props['data-activeTwoToneColor'][1] + '}');
    }
    if(props.width) {
      addNewStyle(root + '#'+ id + '{width: ' + props.width + '}');
    }
    if(props.height) {
      addNewStyle(root + '#'+ id + '{height: ' + props.height + '}');
    }
}
const isArrayContainsElement = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            return true;
        }
    }
    return false;
}

const OPTIONS = ['color', 'data-activeColor', 'data-hoverColor', 'data-twoToneColor', 'data-hoverTwoToneColor', 'data-activeTwoToneColor', 'width', 'height'];

const ${variables.componentName} = (${variables.props}) => {
  const isSetOptions = isArrayContainsElement(Object.keys(${variables.props}), OPTIONS);
  const svg = ${variables.jsx};
  if(isSetOptions) {
    const parents = [];
    findPathParent(svg, parents);
    const id = svg.props.id;
    changePathStyle(props, parents, id);
  }
  return svg;
};

${variables.exports};
`
}
