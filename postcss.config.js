module.exports = {
    plugins: [
    	require("autoprefixer")({
			"overrideBrowserlist": [
				"last 1 version",
				"> 1%",
				"maintained node versions",
				"not dead"
			],
	    })
    ],
};
