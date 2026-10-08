// PostHog's HTML bootstrap queues events until the browser SDK has loaded.
!function (t, e) {
  var o, n, p, r;
  e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) {
    function g(t, e) {
      var o = e.split(".");
      2 == o.length && (t = t[o[0]], e = o[1]);
      t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); };
    }
    (p = t.createElement("script")).type = "text/javascript";
    p.crossOrigin = "anonymous";
    p.async = !0;
    p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js";
    (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
    var u = e;
    void 0 !== a ? u = e[a] = [] : a = "posthog";
    u.people = u.people || [];
    u.toString = function (t) {
      var e = "posthog";
      return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
    };
    u.people.toString = function () { return u.toString(1) + ".people (stub)"; };
    o = "capture identify alias people.set people.set_once people.unset reset group register register_once unregister opt_in_capturing opt_out_capturing has_opted_out_capturing clear_opt_in_out_capturing startSessionRecording stopSessionRecording sessionRecordingStarted captureException getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags on onFeatureFlags onSurveysLoaded getSurveys getActiveMatchingSurveys renderSurvey".split(" ");
    for (n = 0; n < o.length; n++) g(u, o[n]);
    e._i.push([i, s, a]);
  }, e.__SV = 1);
}(document, window.posthog || []);

window.posthog.init("phc_wRVsqkUPVU9D5hYLyKZYdXweNHXys2Lj9QSSvq6XtFCW", {
  api_host: "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: true,
});

document.addEventListener("click", (event) => {
  const element = event.target.closest("button, a");
  if (!element || element.hasAttribute("download")) return;

  const label = (element.getAttribute("aria-label") || element.innerText || element.textContent || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 100);
  const elementType = element.tagName.toLowerCase() === "button" ? "button" : "link";

  window.posthog.capture("ui_element_clicked", {
    element_id: element.id || null,
    element_label: label || null,
    element_type: elementType,
    destination_host: element instanceof HTMLAnchorElement ? element.hostname : null,
  });

  if (element.id === "downloadPNG" || element.id === "downloadSVG") {
    const format = element.id === "downloadPNG" ? "PNG" : "SVG";
    window.posthog.capture("asset_downloaded", {
      format,
      file_name: format === "PNG" ? "my-durves-image.png" : "my-durves-vector.svg",
    });
  }

  if (element.id === "framer-plugin-link") {
    window.posthog.capture("framer_plugin_clicked", {
      destination: "https://www.framer.com/marketplace/plugins/durves/",
    });
  }
});
