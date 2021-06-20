module.exports = {
	configureWebpack: {
		devtool: "source-map",
	},

	chainWebpack: (config) => {
		config.resolve.alias.set("vue", "@vue/compat");

		config.module
			.rule("vue")
			.use("vue-loader")
			// .loader(require.resolve("vue-loader-v16"))
			.tap((options) => {
				return {
					...options,
					compilerOptions: {
						...(options.compilerOptions || {}),
						isCustomElement: (tag) => /^(trix|gcse|ion)/i.test(tag),
					},
				};
			});
	},
};
