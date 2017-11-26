package com.hjw.example.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Created by 黄毅 on 2017/6/26.
 */
@Configuration
@EnableTransactionManagement
public class Config {

    @Value("${database.driver}")
    private String databaseDriver;
    @Value("${database.url}")
    private String databaseUrl;
    @Value("${database.name}")
    private String databaseUsername;
    @Value("${hibernate.dialect}")
    private String HIBERNATE_DIALECT;
    @Value("${hibernate.show_sql}")
    private String HIBERNATE_SHOW_SQL;
    @Value("${hibernate.hbm2ddl.auto}")
    private String HIBERNATE_HBM2DDL_AUTO;
    @Value("${entityManager.packagesToScan}")
    private String ENTITYMANAGER_PACKAGES_TO_SCAN;
    @Value("${hibernate.enable_lazy_load_no_trans}")
    private String LAZY_LOAD;//开启延迟加载

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(databaseDriver);
        dataSource.setUrl(databaseUrl);
        dataSource.setUsername(databaseUsername);
        return dataSource;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
        sessionFactoryBean.setDataSource(dataSource());
        sessionFactoryBean.setPackagesToScan
                (ENTITYMANAGER_PACKAGES_TO_SCAN);
        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", HIBERNATE_DIALECT);
        hibernateProperties.put("hibernate.show_sql", HIBERNATE_SHOW_SQL);
        hibernateProperties.put("hibernate.hbm2ddl.auto", HIBERNATE_HBM2DDL_AUTO);
        hibernateProperties.put("hibernate.enable_lazy_load_no_trans",LAZY_LOAD);//开启延迟加载
        sessionFactoryBean.setHibernateProperties(hibernateProperties);
        return sessionFactoryBean;
    }

    @Bean
    public HibernateTransactionManager transactionManager(){
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());
        return transactionManager;
    }
}
