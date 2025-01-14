function FindProxyForURL(url, host) {
    var proxy = "SOCKS5 127.0.0.1:1337; DIRECT";
    var host_ip = dnsResolve(host);
    //if (shExpMatch(host,".peak6.net")) {
    //    return PROXY;
    //}
    //if (isInNet(host_ip, "192.168.0.0", "255.255.0.0")) {
    //    return "DIRECT";
    //} else
    if (
        dnsDomainIs(host,".peak6.net") || isInNet(host_ip, "10.0.0.0", "255.0.0.0")
    ) {
        return proxy;
    } else {
        return "DIRECT";
    }
}
