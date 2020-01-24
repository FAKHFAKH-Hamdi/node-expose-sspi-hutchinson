#pragma once;

#define NODE_ADDON_API_DISABLE_DEPRECATED
#include "napi.h"

#include <winsock.h>
#define SECURITY_WIN32
#include <sspi.h>
#include <string>

#include "Credentials.h"

// TODO: to be removed because it would be better to let the user enter this or
// allocate.
#define cbMaxMessage 48256

namespace myAddon {

class JS {
 public:
  static Napi::Value convert(Napi::Env env, SecBufferDesc* pSecBufferDesc);
  static Napi::Value convert(Napi::Env env, TimeStamp* pTimeStamp);
  static Napi::Object convert(Napi::Env env, Credentials* c);
  static Napi::Array convert(Napi::Env env, unsigned long cPackages,
                             PSecPkgInfo pPackageInfo);

  static Credentials initCredentials(Napi::Object& credential);
  static PSecBufferDesc initSecBufferDesc();
  static PSecBufferDesc initSecBufferDesc(Napi::Object& clientSecurityContext);
};

}  // namespace myAddon
