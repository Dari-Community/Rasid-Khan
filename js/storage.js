const KEY='dari-community-receipt-reader-v0.1.0';
export function loadState(){try{const raw=localStorage.getItem(KEY);if(!raw)return{items:[],discount:{type:'percent',value:0},currency:'AFN'};const p=JSON.parse(raw);return{items:Array.isArray(p.items)?p.items:[],discount:p.discount||{type:'percent',value:0},currency:p.currency||'AFN'}}catch{return{items:[],discount:{type:'percent',value:0},currency:'AFN'}}}
export function saveState(s){try{localStorage.setItem(KEY,JSON.stringify(s))}catch{}}
