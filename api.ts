export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
export async function getTasks(){const r=await fetch(`${API}/tasks`,{cache:'no-store'});if(!r.ok)throw new Error('Failed to load tasks');return r.json();}
export async function createTask(title:string,description:string){const r=await fetch(`${API}/tasks`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,description,status:'TODO'})});if(!r.ok)throw new Error('Failed to create task');return r.json();}
export async function toggleTask(id:number,status:string){const r=await fetch(`${API}/tasks/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});if(!r.ok)throw new Error('Failed to update task');return r.json();}
