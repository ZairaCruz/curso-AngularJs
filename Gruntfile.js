(function(){
    'use stict';

    module.exports = function(grunt){
        require('matchdep').filterDev('grunt-*')
            .forEach(grunt.loadNpmTasks);

            // Configuração do projeto
            grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                uglify:{
                   build:{
                        expand: true,
                        src:'app/**/*.js',
                        dest:'build'
                    }
                },
                ngdocs:{
                    options:{
                        dest: 'docs',
                        html5Mode: false,
                        scripts:[
                            'bower_components/angular/angular.js'
                        ]
                    },
                    api:{
                        src:['app/**/*.js', '!app/**/my-app.js'],
                        title: 'Docs'
                    }
                }

            });

            //Carrega o plugin que fornece a tareda de "uglify" mimificação
            //Necessário somente se não estiver utilizando o matchdep
           // grunt.loadNpmTasks('grunt-contrib-uglify');

            //Tarefa de minificar
            grunt.registerTask("minificar", ['uglify']);

            //Tarefa de documentar
            grunt.registerTask("gerardocs", ['ngdocs']);
    };

    
})();