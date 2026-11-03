---
id: delete-account
title: Eliminar tu cuenta y tus datos
slug: /delete-account
sidebar_label: Eliminar tu cuenta y tus datos
sidebar_position: 85
---

# AURA — Eliminar tu cuenta y tus datos

Última actualización: 2026-10-30 / App: **AURA** (Android) / Proveedor: **Black Cat Fortune Works (Kuroneko Fukuya)**

:::info Qué debes saber primero
**AURA no tiene ninguna cuenta administrada por nosotros (Black Cat Fortune Works).** No hay registro ni inicio de sesión.
El único servidor que operamos es un servidor de retransmisión (para los guiones con IA del resumen en audio, los conteos de uso, los tokens de dispositivo de la prueba gratuita y el diccionario compartido), y tampoco recibe tu nombre ni tu correo electrónico. El servidor de retransmisión conserva solo estas 3 cosas, y ninguna está vinculada a tu nombre ni a tu correo electrónico:

- Identificadores por dispositivo y conteos para medir el uso: se eliminan automáticamente a los 2 días
- El token de dispositivo de un dispositivo que inició la prueba gratuita de AURA Plus, y la fecha y hora en que empezó: se conservan 400 días para evitar que se repita la prueba y luego se eliminan automáticamente
- Las palabras, lecturas y traducciones enviadas con «Mejorar el diccionario entre todos», y un token por dispositivo (un número aleatorio de 16 dígitos): se reciben solo cuando lo activas. Quedan como candidatos para el diccionario compartido y no se eliminan automáticamente

Por eso no tenemos datos de usuario que podamos vincular contigo y eliminar.

La «cuenta» en AURA es **la cuenta de Google que tú mismo usas para sincronizar entre dispositivos (AURA Plus)**.
Los datos de sincronización se guardan solo en **una carpeta exclusiva de la app en tu propio Google Drive**.
:::

## 1. Cómo eliminar (puedes eliminarlo todo tú mismo)

### Paso A: eliminar los datos de sincronización (en tu propio Google Drive)

1. Abre [Google Drive](https://drive.google.com/) en un navegador desde una computadora
2. Abre el **ícono de engranaje > Configuración** arriba a la derecha
3. Abre **Administrar aplicaciones** a la izquierda
4. Busca **AURA** en la lista y elige **Opciones > Desconectar de Drive** a la derecha

Al desconectar, se revoca el permiso de AURA para acceder a los datos de tu Drive, y
**Google elimina los datos de la carpeta exclusiva de AURA** (así funciona Google Drive).

> Si no usas la sincronización (no usas AURA Plus, o nunca has iniciado sesión),
> no hay datos en tu Drive. No necesitas este paso.

### Paso B: eliminar los datos de tu dispositivo

**Desinstala AURA.** Tu lista de fuentes, los artículos, el estado de leído y guardado, los ajustes, la caché de imágenes
y los archivos de copia de seguridad automática se eliminan de tu dispositivo al desinstalar.

Para dejar de sincronizar sin eliminar nada, ve a **Configuración > Conexiones > Sincronizar entre dispositivos > Cerrar sesión** en la app.
La sincronización se detiene (las fuentes y los ajustes del dispositivo se quedan como están).

### Paso C: pídenos que eliminemos tus datos

Si no puedes hacer los pasos anteriores tú mismo, o quieres una confirmación de la eliminación, escríbenos un correo.

- **Para**: [kuroneko.fukuya@gmail.com](mailto:kuroneko.fukuya@gmail.com)
- **Asunto**: `AURA account deletion request`
- **Qué incluir**: **la dirección de correo de la cuenta de Google que usas para sincronizar** (no se necesita nada más)

Te responderemos **dentro de los 7 días siguientes a recibir tu solicitud**.
Ten en cuenta que **los datos de nuestro servidor de retransmisión no están vinculados a direcciones de correo, así que no podemos identificarlos a partir de una solicitud. Por eso, no hay datos que podamos eliminar de nuestra parte.**
En nuestra respuesta, te explicaremos los pasos A y B de arriba y confirmaremos que no tenemos datos relacionados contigo.

## 2. Qué se elimina / qué permanece

| Datos | Dónde están | Cómo eliminarlos | Cuándo se eliminan |
| --- | --- | --- | --- |
| Lista de fuentes, carpetas, artículos, estado de leído y guardado, ajustes, caché de imágenes, copia de seguridad automática de la lista de fuentes | **Solo en tu dispositivo** | Paso B (desinstalar) | **De inmediato** (al desinstalar) |
| Datos de sincronización (fuentes, carpetas, filtros, reglas de ocultar, artículos guardados, estado de leído / sin leer, lista de artículos, ajustes, el ID y el modelo del dispositivo que se usan para decidir el dispositivo principal) | **Una carpeta exclusiva de la app en tu propio Google Drive** | Paso A (desconectar de Drive) | **Eliminados por el procesamiento de Google** |
| Datos de usuario que tenemos vinculados a tu nombre o a tu correo electrónico | **Ninguno** (no tenemos cuentas de usuario) | — | — |
| Conteos de guiones con IA del resumen en audio (un identificador por dispositivo y la cantidad de usos de ese día) | Nuestro servidor de retransmisión | No tienes que hacer nada | **Se eliminan automáticamente a los 2 días** |
| Token de dispositivo de la prueba gratuita de AURA Plus y la fecha y hora en que empezó la prueba (se usa solo para evitar que se repita la prueba) | Nuestro servidor de retransmisión | No tienes que hacer nada | **Se eliminan automáticamente a los 400 días** |
| Palabras, lecturas y traducciones enviadas con «Mejorar el diccionario entre todos», y un token por dispositivo (un número aleatorio de 16 dígitos; solo cuando lo activas) | Nuestro servidor de retransmisión (candidatos para el diccionario compartido) | Al desactivar el interruptor se elimina lo que aún no se haya enviado desde tu dispositivo. Lo que ya se envió no está vinculado a direcciones de correo, así que no podemos identificarlo a partir de una solicitud | **No se eliminan automáticamente** |

### Qué permanece

- **El correo que nos enviaste para pedir la eliminación** (si usaste el paso C).
  Como registro de la atención de consultas, lo conservamos en nuestro buzón **durante 1 año desde que lo recibimos** y luego lo eliminamos.
  El correo contiene solo la dirección de correo que enviaste y tu mensaje
- **Información relacionada con los anuncios en la versión gratuita (Free).** En Free, Google AdMob envía a Google tu ID de publicidad y otra información
  (consulta «2. Anuncios» en la [Política de privacidad](/privacy)). **Lo recibe Google, no nosotros**.
  Restablece o elimina tu ID de publicidad en **Configuración > Google > Anuncios** de tu dispositivo
- **Informes de uso y de fallas** (Firebase de Google). Lo que se envió mientras «Enviar informes de uso y de fallas» estaba activado (activado por defecto)
  permanece en Firebase de Google (consulta «Informes de uso y de fallas» en el apartado «3.» de la [Política de privacidad](/privacy)).
  Para detenerlo, desactiva **Configuración > Información y ayuda > «Enviar informes de uso y de fallas»** en la app
- **Copia de seguridad automática de Android.** Si la copia de seguridad está activada en los ajustes de tu dispositivo, los datos de la app pueden incluirse
  en la copia de seguridad de **tu propia cuenta de Google**.
  Elimínala en **Configuración > Google > Copia de seguridad** de tu dispositivo (no tenemos acceso a ella)

## 3. Tiempo desde la solicitud hasta la eliminación

| | Tiempo |
| --- | --- |
| Pasos A y B (los haces tú mismo) | **Se hacen al instante** |
| Paso C (solicitud por correo) | Respondemos **dentro de los 7 días siguientes a recibirla** |

---

Si tienes preguntas, comunícate con nosotros desde [Contacto](/contact).
Para saber cómo manejamos los datos en general, consulta la [Política de privacidad](/privacy).
