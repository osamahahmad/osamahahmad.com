# [osamahahmad.com](https://osamahahmad.com)

This is a repository for my first Node.js project: a web server for my personal website.

I [MEAN](https://rapidapi.com/blog/lamp-vs-mean/), I'm pretty used to LAMP stacks, but it's also important to expand my skillset. Node also enables slick real-time technology in my web apps — something sorely amiss in [the stuff I use at work](https://en.wikipedia.org/wiki/Lorenzo_patient_record_systems).

## Hosting
I've been using [Google Cloud Free Tier](https://cloud.google.com/free/docs/free-cloud-features) to run a small Ubuntu server. Getting SSL working was a breeze with [Cloudflare's free plan](https://www.cloudflare.com/en-gb/plans/free/) (use flexible mode), and so was DNS management.

I've been using [Visual Studio Code](https://code.visualstudio.com) with the [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) to work on this project.

## Installing Node.js
Installing Node was easy with [Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm). `nvm` can be installed with [a simple cURL command](https://github.com/nvm-sh/nvm#installing-and-updating), and Node.js can be installed with an even-more-simple `nvm install` command:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm list remote
nvm install lts/hydrogen
```
And, yes, I screened that bash script before running it!

## Creating a Node.js project
I made a project directory, and changed into it:
```
mkdir -p Node.js/server
cd Node.js/server
```
I then generated an ISC license, relevant .gitignore and Contributor Covenenant:
```
npx license isc
npx gitignore node
npx covgen me@osamahahmad.com
```
Finally, I initialised a new [`npm`](https://www.npmjs.com/) package:
```
npm init
```

## Installing Node.js packages
I used [`npm`] to install [`express`](https://www.npmjs.com/package/express) and [`vhost`](https://www.npmjs.com/package/vhost):
```
npm install express
npm install vhost
```
`express` is the most popular Node web framework, and the `vhost` middleware allows me to use multiple domains with ease.

Standard Node installations are not able to use port 80, so I used this well-known workaround:
```
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
```

I then installed `pm2` with the global flag (`-g`):
```
npm install pm2 -g
```

Using `pm2 start` to start my project gives me far more flexibility than the `node` command. For one, the `pm2 startup` command enables the server to — you guessed it — start on startup and, also, there's zero downtime when updating it with the `pm2 reload` command.
