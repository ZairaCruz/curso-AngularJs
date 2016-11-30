(function(){
    'use stict';

    module.exports = function(grunt){
        require('matchdep').filterDev('grunt-*')
            .forEach(grunt.loadNpmTasks);

            // Configuração do projeto
            grunt.initConfig({
                uglify:{
                    diretivas:{
                        expand: true,
                        src:'app/js/directives/**/*.js',
                        dest:'build/directives'
                    },
                    filtros:{

                    },
                    services:{

                    }
                }

            });

            //Carrega o plugin que fornece a tareda de "uglify" mimificação
            //Necessário somente se não estiver utilizando o matchdep
           // grunt.loadNpmTasks('grunt-contrib-uglify');

            //Tarefa de minificar
            grunt.registerTsk("minificar", ['uglify:diretivas', 'uglify:services']);
    };
})();