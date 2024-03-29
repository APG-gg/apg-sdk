const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')             // Descomponer caracteres acentuados en su forma básica y diacríticos
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/ñ/g, 'n')           // Reemplazar ñ por n
    .toLowerCase()
    .replace(/\s+/g, '-')         // Reemplazar espacios en blanco con guiones
    .replace(/[^\w\-]+/g, '')     // Eliminar caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, '-')       // Reemplazar múltiples guiones con uno solo
    .replace(/^-+/, '')           // Eliminar guiones al principio
    .replace(/-+$/, '');  

export default slugify;