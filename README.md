# __Visual Thinking API__

## __Dependencias__
- Express: Utilizado para crear el servidor de la API y procesar el HTTP correspondiente.
- ESLint: Permite estandarizar el formato del código escrito. Utiliza convenciones del lenguaje para evitar errores y facilitar su legibilidad.
- Jest: Para la creación de pruebas unitarias.

## __Diseño de los componentes__
```mermaid
graph TD;
    Reader-->StudentService;
    StudentService-->StudentController;
    StudentController-->Server;
    Server---API;
    API-->v1/students;
    API-->v1/students/emails;
    API-->v1/students/credits;
```

### __Reader__
Reader permitirá leer los archivos de JSON y también dará el formato JSON para el return.
```mermaid
classDiagram
    class Reader
    Reader : +readJsonFile(path)
```

