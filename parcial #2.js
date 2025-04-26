<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simple</title>
</head>
<body>
    <h1>Calculadora</h1>

    <div>
        <label for="numero1">Número 1:</label>
        <input type="text" id="numero1" name="number1">
    </div>

    <div>
        <label for="numero2">Número 2:</label>
        <input type="text" id="numero2" name="number2">
    </div>

    <div id="operaciones">
        <button name="Suma" onclick="operar('+')">+</button>
        <button name="Resta" onclick="operar('-')">-</button>
        <button name="Multiplicación" onclick="operar('*')">*</button>
        <button name="División" onclick="operar('/')">/</button>
    </div>

    <div>
        <label for="Resultado">Resultado:</label>
        <input type="text" id="Resultado" name="Resultado" readonly>
    </div>

    <script src="script.js"></script>
</body>
</html>
