Una API REST (Representational State Transfer) es un conjunto de reglas y convenciones que define cómo se pueden crear, consultar, actualizar o eliminar recursos en un sistema distribuido a través del protocolo HTTP. Está basada en los principios de la arquitectura REST, que promueve la interoperabilidad entre sistemas mediante la representación uniforme de recursos y la manipulación de esos recursos a través de operaciones estándar como GET, POST, PUT y DELETE.

### Características de una API REST:

1. **Basada en Recursos**: Los recursos (o entidades) son elementos identificables que pueden ser accedidos y manipulados a través de la API. Cada recurso tiene un identificador único (URL) y representa una entidad del dominio de la aplicación (por ejemplo, un usuario, un producto, una publicación en un blog).

2. **Protocolo HTTP**: Utiliza los métodos HTTP estándar para realizar operaciones sobre los recursos:
   - GET: Obtener un recurso.
   - POST: Crear un nuevo recurso.
   - PUT: Actualizar un recurso existente.
   - DELETE: Eliminar un recurso.

3. **Representación de Recursos**: Los recursos son representados en diferentes formatos, como JSON, XML o HTML, según las preferencias del cliente. La API REST debe ser capaz de negociar y devolver la representación adecuada según la solicitud del cliente.

4. **Sin Estado (Stateless)**: Cada solicitud al servidor contiene toda la información necesaria para procesarla. El servidor no mantiene ningún estado de sesión entre las solicitudes del cliente. Esto permite una fácil escalabilidad y confiabilidad del sistema.

5. **Interfaz Uniforme**: Define una interfaz uniforme entre los componentes del sistema, lo que simplifica la integración y la interoperabilidad entre diferentes partes de la aplicación o entre diferentes aplicaciones.

6. **Independiente del Cliente**: Los clientes no necesitan conocer la implementación interna del servidor. Solo necesitan interactuar con la API a través de los recursos y métodos definidos.

### Ejemplo de Uso de una API REST:

Supongamos que tenemos una API REST para administrar usuarios en un sistema. Podríamos tener las siguientes operaciones:

- `GET /users`: Obtener la lista de todos los usuarios.
- `GET /users/{id}`: Obtener los detalles de un usuario específico.
- `POST /users`: Crear un nuevo usuario.
- `PUT /users/{id}`: Actualizar los detalles de un usuario existente.
- `DELETE /users/{id}`: Eliminar un usuario.

El cliente puede interactuar con esta API utilizando las operaciones mencionadas y manipular los recursos de usuario de acuerdo con sus necesidades.

En resumen, una API REST proporciona una manera estándar y flexible de interactuar con los recursos de un sistema a través de HTTP, lo que permite una comunicación eficiente y una fácil integración entre diferentes aplicaciones y sistemas distribuidos.