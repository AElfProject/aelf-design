export const defaultTemplate: any = (variables: any, { tpl }: any) => {
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
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = 'styles_js';
      document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}


function changePathStyle(props, arr, id) {
    const str = arr.join(' ');
    const root = arr[0];
    const others = arr.slice(1);
    if(props?.color) {
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props.color + '}');
    }
    if(props?.hoverColor) {
        addNewStyle(root + '#'+ id + ':hover ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props.hoverColor + '}');
    }
    if (Array.isArray(props?.twoToneColor)) {
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props.twoToneColor[0] + '}');
        addNewStyle(root + '#'+ id + ' ' + others.join(' ') + ' path:nth-of-type(2) {fill: ' + props.twoToneColor[1] + '}');
    }
    if (Array.isArray(props?.hoverTwoToneColor)) {
        addNewStyle(root + '#'+ id + ':hover ' + others.join(' ') + ' path:nth-of-type(1) {fill: ' + props.hoverTwoToneColor[0] + '}');
        addNewStyle(root + '#'+ id + ':hover ' + others.join(' ') + ' path:nth-of-type(2) {fill: ' + props.hoverTwoToneColor[1] + '}');
    }
    if(props?.width) {
      addNewStyle(root + '#'+ id + '{width: ' + props.width + '}');
    }
    if(props?.height) {
      addNewStyle(root + '#'+ id + '{height: ' + props.height + '}');
    }
}
// prevent adding styles multiple times
let hanfleFlag = true;
const ${variables.componentName} = (${variables.props}) => {
  const svg = ${variables.jsx};
  if(hanfleFlag) {
    const parents = [];
    findPathParent(svg, parents);
    const id = svg.props.id;
    changePathStyle(props, parents, id);
    hanfleFlag = false;
  }
  return svg;
};
 
${variables.exports};
`
}
