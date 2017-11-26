package com.hjw.example.service;

import com.qiniu.util.Auth;
import org.springframework.stereotype.Service;

/**
 * Created by Rico on 2017/6/29.
 */
@Service
public class QiniuUploadServiceImpl implements QiniuUploadService {


    private static  final String ACCESS_KEY = "bMHKefjgMdSvn1pGuPZgBpuJ85vXyc0qf6NNJyPV";
    private static final String SECRET_KEY = "DOnmx5PTQcUdhAj816UXoQwfHq0T2zl0BhZAbumW";
    private static final String BUCKET_NAME = "hjw-java";
    private Auth auth;

    public QiniuUploadServiceImpl() {
        this.auth = Auth.create(ACCESS_KEY, SECRET_KEY);
    }


    @Override
    public String getUploadToken() {
        return auth.uploadToken(BUCKET_NAME);
    }
}
