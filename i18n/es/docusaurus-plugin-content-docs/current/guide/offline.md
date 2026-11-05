---
id: offline
title: Leer sin conexión
slug: /guide/offline
---

# Leer sin conexión

Con **Conservar artículos para leer sin conexión**, AURA **conserva el texto completo y las imágenes de los artículos en tu dispositivo**, para que puedas leerlos sin señal.
En la lista, los artículos que puedes leer sin conexión tienen una marca de nube.

## Cómo funciona

- AURA conserva el texto completo y las imágenes de los **artículos guardados** (primero) y de los **artículos nuevos** (durante 48 horas después de que llegan)
- Los obtiene **solo con Wi-Fi** y **mientras AURA está cerrada**. Mientras AURA está abierta, hace una pausa para mostrar primero la lista y los artículos
- Descansa mientras la batería está baja o el dispositivo está caliente
- Con datos móviles, AURA obtiene solo el artículo que abres, cuando lo abres. Lo mismo ocurre con los artículos de más de 48 horas
- La descarga anticipada automática usa hasta 50 MB al día (este límite no se aplica mientras tu dispositivo se carga con Wi-Fi)

## Configuración

Ve a **Configuración > Sin conexión y almacenamiento**.

![Configuración > Sin conexión y almacenamiento](/img/guide/en/offline-settings.jpg)

- **Conservar artículos para leer sin conexión**: **Con Wi-Fi (recomendado)** o **No conservar** (AURA obtiene solo el artículo que abres, cuando lo abres)
- **Almacenamiento** > **Cantidad que se conserva en el dispositivo**: 128, 256, 512 o 1024 MB, o Sin límite. Un cuarto se destina al texto y tres cuartos a las imágenes. Lo que pase del límite se elimina, empezando por lo más antiguo (los artículos guardados se conservan).
  Las cuentas Free pueden usar hasta 512 MB. 1024 MB y Sin límite son funciones de **[AURA Plus](/plus)**
- **Ubicación de las imágenes**: con una tarjeta SD extraíble insertada, toca **Mover imágenes a la tarjeta SD**. El texto de los artículos se queda en el dispositivo, así que no pierdes artículos si sacas la tarjeta
- **Imágenes** > **Obtener imágenes más pequeñas**: limita el lado largo a 1920 px y guarda las imágenes como WebP (se hace solo en tu dispositivo)
- **Espacio en uso**: **Artículos disponibles sin conexión** (la cantidad), **Texto de los artículos**, **Imágenes**, **Total** y **Datos usados este mes**
- **Liberar espacio**
  - **Limpiar artículos leídos** y **Limpiar ahora** (consulta [Leer y guardar](/guide/read))
  - **Eliminar texto completo e imágenes obtenidos (artículos leídos)** / **Eliminar texto completo e imágenes obtenidos (todos)**: el texto completo de los artículos guardados se conserva

## Progreso

Mientras AURA obtiene el texto completo, aparecen **↻ y un número** arriba a la derecha de la lista (consulta [Progreso de la actualización](/guide/progress)).
Cuando termina una obtención, la parte inferior de la lista muestra por un momento **Obtención de texto completo terminada** con un desglose (obtenidos, fallidos, imágenes y datos usados).
La parte superior del panel lateral también muestra **Artículos que puedes leer sin conexión** con el número que hay en tu dispositivo, por ejemplo “2187 / 11753”.

Para saber qué pasa cuando no se puede obtener el texto completo, consulta [Obtención del texto completo](/guide/fulltext).
