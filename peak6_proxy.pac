function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:1337; DIRECT"
    var host_ip = dnsResolve(host);
    //if (shExpMatch(host,".peak6.net")) {
    //    return PROXY;
    //}
    if (
        dnsDomainIs(host,".peak6.net") || isInNet(host_ip, "10.0.0.0", "255.0.0.0")
    ) {
        return PROXY;
    } else {
        return "DIRECT";
    }
}
