import config from './config';

const post = (url, param) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            method: 'POST',
            data: param,
            success(res) {
                try {

                    if (res.data.message.messagE_CODE == "100001") {
                        wx.showToast({
                            title: '登录已过期',
                            success: function () {
                                wx.clearStorage({
                                    success: (res) => {
                                        wx.navigateTo({
                                            url: '/pages/login/index'
                                        });
                                    },
                                })
                            }
                        })
                    }

                    if (res.data.message.messagE_CODE == "0") {
                        wx.showToast({
                            title: res.data.message.messagE_TEXT,
                            success: function () {

                            }
                        })

                    }

                } catch (error) {
                    console.log(error)
                }

                resolve(res.data);
            },
            fail(err) {
                reject(err);
            },
            complete() {

            }
        });
    });
};

module.exports = {
    post
};