(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){},19:function(t,e,o){},21:function(t,e,o){},25:function(t,e,o){},27:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),l=o(2),s=o.n(l),r=(o(15),o(3)),i=o(4),m=o(7),c=o(5),u=o(8),f=(o(17),o(19),Object(a.memo)(function(t){var e=t.symbol;return n.a.createElement("div",{className:"symbol"},e)})),p=(o(21),o(6)),h=o.n(p),d=function(t){var e=t.rolling,o=t.slots;return n.a.createElement("div",{className:"slot-container"},o.map(function(t){return n.a.createElement(f,{key:h()(),symbol:t,rolling:e})}))},b=(o(25),Object(a.memo)(function(t){var e=t.score;return n.a.createElement("div",{className:"score-display"},0!==e?n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Congratulations!"),n.a.createElement("h2",{className:"score"},"Your award is: ",e)):null)})),y=1e4,g=50,v=100,w=20,E=10,T=function(t){function e(t){var o;return Object(r.a)(this,e),(o=Object(m.a)(this,Object(c.a)(e).call(this,t))).rollSymbols=function(){setInterval(function(){if(o.state.rolling){var t=o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)],e=o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)],a=o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)];o.setState({slot1:t,slot2:e,slot3:a,rolling:!0,award:0})}},g)},o.finishGameAutomaticallyAfterTimeout=function(){o.finishTimeout=setTimeout(o.handleStop,y)},o.startGame=function(){clearTimeout(o.startTimeout),o.setState({rolling:!0}),o.finishGameAutomaticallyAfterTimeout(),o.rollSymbols()},o.handleStop=function(){clearTimeout(o.finishTimeout),o.setState({rolling:!1}),o.calculateAwardIfAny()},o.calculateAwardIfAny=function(){var t=o.state,e=t.slot1,a=t.slot2,n=t.slot3;e===a&&a===n?o.setState({award:v}):e===a||a===n?o.setState({award:w}):e===n&&o.setState({award:E})},o.state={slot1:o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)],slot2:o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)],slot3:o.props.symbols[Math.floor(Math.random()*o.props.symbols.length)],rolling:!1,award:0},o.startTimeout=null,o.finishTimeout=null,o}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.startTimeout=setTimeout(function(){t.startGame()},5e3)}},{key:"render",value:function(){var t=this.state,e=t.slot1,o=t.slot2,a=t.slot3,l=t.rolling,s=t.award,r=[e,o,a];return n.a.createElement("div",{className:"slot"},n.a.createElement(d,{slots:r,rolling:l}),n.a.createElement("button",{className:"btn-start",onClick:this.startGame,disabled:l},l?"Rolling...":"START GAME!"),n.a.createElement("button",{className:"btn-stop",onClick:this.handleStop,disabled:!l},"STOP"),n.a.createElement(b,{score:s}))}}]),e}(a.Component);T.defaultProps={symbols:["\ud83c\udf53","\ud83c\udf4c","\ud83c\udf4a","\ud83d\udc35"]};var M=T;s.a.render(n.a.createElement(M,null),document.getElementById("root"))},9:function(t,e,o){t.exports=o(27)}},[[9,2,1]]]);
//# sourceMappingURL=main.aea092c5.chunk.js.map