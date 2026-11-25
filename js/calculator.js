export function subtotal(items){return items.reduce((s,i)=>s+i.price*i.quantity,0)}
export function clampDiscount(value,total,type='fixed'){const v=Math.max(0,Number(value)||0);return Math.min(total,type==='percent'?total*Math.min(100,v)/100:v)}
export function quantityTotal(items){return items.reduce((s,i)=>s+i.quantity,0)}
export function finalAmount(total,discount){return Math.max(0,total-discount)}
