const underlineGif = new Proxy({"src":"/_astro/underline.DAfY0vOY.gif","width":365,"height":36,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/public/gifs/underline.gif";
							}
							
							return target[name];
						}
					});

export { underlineGif as u };
