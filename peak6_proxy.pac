function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:1337; DIRECT"
    if (shExpMatch(host,"kibana.peak6.net")) {
        return PROXY;
    }
    return "DIRECT";
}
