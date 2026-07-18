(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll(".navbar-collapse .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var collapse = document.querySelector(".navbar-collapse.show");
      if (collapse && window.bootstrap) {
        var instance = bootstrap.Collapse.getInstance(collapse);
        if (instance) instance.hide();
      }
    });
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var form = document.querySelector("form.contactForm");
  if (!form) return;

  var emailExp = /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i;

  function validateField(el) {
    var ruleAttr = el.getAttribute("data-rule");
    if (!ruleAttr) return true;

    var rule = ruleAttr;
    var exp = null;
    var pos = ruleAttr.indexOf(":");
    if (pos >= 0) {
      exp = ruleAttr.slice(pos + 1);
      rule = ruleAttr.slice(0, pos);
    }

    var invalid = false;
    var value = el.value.trim();

    switch (rule) {
      case "required":
        invalid = value === "";
        break;
      case "minlen":
        invalid = value.length < parseInt(exp, 10);
        break;
      case "email":
        invalid = !emailExp.test(value);
        break;
      default:
        break;
    }

    var validation = el.parentElement.querySelector(".validation");
    if (validation) {
      validation.textContent = invalid
        ? el.getAttribute("data-msg") || "Please check this field"
        : "";
    }
    return !invalid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fields = form.querySelectorAll("input, textarea");
    var ok = true;
    fields.forEach(function (field) {
      if (!validateField(field)) ok = false;
    });
    if (!ok) return;

    var action = form.getAttribute("action") || "https://usebasin.com/f/6542b071cffd";
    var data = new FormData(form);

    fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (res) {
        return res.json().then(function (msg) {
          return { ok: res.ok, msg: msg };
        });
      })
      .then(function (result) {
        var send = document.getElementById("sendmessage");
        var err = document.getElementById("errormessage");
        if (result.msg && result.msg.success) {
          if (send) send.classList.add("show");
          if (err) err.classList.remove("show");
          form.reset();
        } else {
          if (send) send.classList.remove("show");
          if (err) {
            err.classList.add("show");
            err.textContent =
              (result.msg && (result.msg.error || result.msg.message)) ||
              "Something went wrong. Please try again or call us.";
          }
        }
      })
      .catch(function () {
        var send = document.getElementById("sendmessage");
        var err = document.getElementById("errormessage");
        if (send) send.classList.remove("show");
        if (err) {
          err.classList.add("show");
          err.textContent = "Unable to send. Please call (678) 306-6449.";
        }
      });
  });
})();
