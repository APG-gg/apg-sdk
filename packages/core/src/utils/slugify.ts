const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')         // Reemplaza espacios en blanco con guiones
    .replace(/[^\w\-]+/g, '')     // Elimina caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, '-')       // Reemplaza múltiples guiones con uno solo
    .replace(/^-+/, '')           // Elimina guiones al principio
    .replace(/-+$/, '');    

export default slugify;