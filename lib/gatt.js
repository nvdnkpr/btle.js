var uuid = require('./uuid');

module.exports.Services = {
  GAP         : uuid.getUUID(0x1800),
  GATT        : uuid.getUUID(0x1801),
  DEVICE_INFO : uuid.getUUID(0x180A)
}

module.exports.Attributes = {
  PRIMARY_SERVICE_UUID   : uuid.getUUID(0x2800),
  SECONDARY_SERVICE_UUID : uuid.getUUID(0x2801),
  INCLUDE_UUID           : uuid.getUUID(0x2802),
  CHARACTERISTIC_UUID    : uuid.getUUID(0x2803)
}

module.exports.CharDescriptors = {
  CHAR_EXTENDED_PROPERTIES_UUID : uuid.getUUID(0x2900),
  CHAR_USER_DESCRIPTION_UUID    : uuid.getUUID(0x2901),
  CLIENT_CHAR_CONFIGURATION     : uuid.getUUID(0x2902),
  SERVER_CHAR_CONFIGURATION     : uuid.getUUID(0x2903),
  CHAR_FORMAT                   : uuid.getUUID(0x2904),
  CHAR_AGGREGATE_FORMAT         : uuid.getUUID(0x2905)
}

module.exports.CharTypes = {
  DEVICE_NAME                   : uuid.getUUID(0x2A00),
  APPEARANCE                    : uuid.getUUID(0x2A01),
  PERIPHERAL_PRIVACY_FLAG       : uuid.getUUID(0x2A02),
  RECONNECTION_ADDRESS          : uuid.getUUID(0x2A03),
  PERIPHERAL_PREFER_CONN_PARAMS : uuid.getUUID(0x2A04),
  SERVICE_CHANGED               : uuid.getUUID(0x2A05),
  SYSTEM_ID                     : uuid.getUUID(0x2A23),
  MODEL_NUMBER_STRING           : uuid.getUUID(0x2A24),
  SERIAL_NUMBER_STRING          : uuid.getUUID(0x2A25),
  FIRMWARE_REVISION_STRING      : uuid.getUUID(0x2A26),
  HARDWARE_REVISION_STRING      : uuid.getUUID(0x2A27),
  SOFTWARE_REVISION_STRING      : uuid.getUUID(0x2A28),
  MANUFACTURER_NAME_STRING      : uuid.getUUID(0x2A29)
}
