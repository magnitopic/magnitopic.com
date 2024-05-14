---
title: "Raspberry Pi OS Lite Setup"
description: ""
summary: "Step by step guide on installing and setting up Raspberry Pi OS Lite"
date: 2024-05-14T11:14:37+02:00
lastmod: 2024-05-14T11:14:37+02:00
draft: false
weight: 50
categories: []
tags: ["raspberryPi", "guide", "networking", "ssh", "OS"]
contributors: ["Magnitopic"]
pinned: false
homepage: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Hello everyone, today we are going to install and configure **Raspberry Pi OS Lite**[^1].

For hardware you can install this it in whatever you want, but keep in mind that this OS is optimized for Raspberry Pi products and that 4GB of storage are recommended.
I'll be using a _Raspberry Pi Zero W_. With this out of the way let's get to the fun part.

After installing Raspbian Lite form the [RaspberryPi download page](https://www.raspberrypi.com/software/operating-systems/), next flash the image to the SD card.

## Enabling SSH

Once that's done, in the newly flashed disk you can enable _SSH_ by adding a new file with no extension named `ssh`, all lower case.

```bash
touch ssh
```

## Configure network connection

Now, you might be using a device with no ethernet port. Like in my case with the _Raspberry Pi Zero W_. And if you can't or don't want to use a screen, you'll have to create a new file named wpa_supplicant.conf and paste this code in. Remember to change the `country`, `name` and `password` according to the wifi network you want to use.

> **NOTE:** The network you are using must be _2.4hz_

```bash
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    scan_ssid=1
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_NETWORK_PASSWORD"
    proto=WPA
    key_mgmt=WPA-PSK
}
```

## Connect to your device

Place the microSD card on you device and power it.
Now SSH to your device.

**Username:** pi
**Password:** raspberry

> To change the default password write on the console `passwd`

## Extras

To set a static ip type: `touch /etc/dhcpcd.conf`

And paste at the bottom of the file:

```bash
interface wlan0
  static ip_address=192.168.1.12/24
  static routers=192.168.1.1
  static domain_name_servers=192.168.1.1 8.8.8.8
```

> In this example it will apply if your connected by WiFi, for Ethernet use `eth0` instead of `wlan0`

And for more settings type on your console `sudo raspi-config`

You can follow this same article in this video explaining the process:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DoknJ9mOgGc?si=8GESs5O871qJEvyq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

[^1]: Previously Raspbian
