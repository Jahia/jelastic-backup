//@auth

include_once com.hivext.scripting.lib.JahiaStorage;

hivext.local.ReturnResult(
    new JahiaStorage(appid, session, "ftpfortest").initUser()
);
