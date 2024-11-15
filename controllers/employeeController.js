const pool = require('../config/db'); 

// Obtener todos los empleados 
exports.getAllEmployees = async (req, res) => { 
    try { 
        const result = await pool.query('SELECT * FROM employees'); 
        res.json(result.rows); 
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
};