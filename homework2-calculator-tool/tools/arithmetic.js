/** Small recursive-descent calculator. No eval, Function, or executable input. */
export function calculateExpression(expression) {
  if (typeof expression!=='string' || !expression.trim()) throw new Error('算式不可空白');
  if (expression.length>200) throw new Error('算式最多 200 字元');
  const tokens=[]; let pos=0;
  while (pos<expression.length) {
    const rest=expression.slice(pos);
    const m=/^(\s+|(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/])/.exec(rest);
    if (!m) throw new Error(`不支援的字元（位置 ${pos+1}）`);
    pos+=m[0].length;
    if (!/^\s+$/.test(m[0])) tokens.push(m[0]);
    if (tokens.length>100) throw new Error('算式過長');
  }
  let i=0;
  function finite(n) { if (!Number.isFinite(n)) throw new Error('結果不是有限數值'); return n; }
  function factor(depth=0) {
    if (depth>32) throw new Error('巢狀層數過深');
    const t=tokens[i];
    if (t==='+' || t==='-') { i++; const n=factor(depth+1); return t==='-'?-n:n; }
    if (t==='(') { i++; const n=sum(depth+1); if(tokens[i++]!==')') throw new Error('括號不配對'); return n; }
    if (t && /^(?:\d+(?:\.\d*)?|\.\d+)$/.test(t)) { i++; return finite(Number(t)); }
    throw new Error('預期數字或括號');
  }
  function product(depth=0) {
    let n=factor(depth);
    while(tokens[i]==='*' || tokens[i]==='/') {
      const op=tokens[i++], right=factor(depth);
      if (op==='/' && right===0) throw new Error('不可除以零');
      n=finite(op==='*'?n*right:n/right);
    }
    return n;
  }
  function sum(depth=0) {
    let n=product(depth);
    while(tokens[i]==='+' || tokens[i]==='-') { const op=tokens[i++],right=product(depth); n=finite(op==='+'?n+right:n-right); }
    return n;
  }
  const result=sum();
  if(i!==tokens.length) throw new Error('算式有多餘符號；不支援隱式乘法、次方或百分比');
  return finite(Object.is(result,-0)?0:result);
}
